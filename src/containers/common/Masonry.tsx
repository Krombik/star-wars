import React, {
  createRef,
  MutableRefObject,
  ReactNode,
  useEffect,
} from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { StyledMasonry } from "components/common/styled";

type Props<T> = {
  columns: number;
  renderItem: (props: T, index: number, setSize: () => void) => ReactNode;
  items: T[];
};

const Masonry = <T extends any>({
  columns,
  renderItem,
  items,
  ...props
}: Props<T> & GridProps) => {
  const elRefs = React.useRef<MutableRefObject<HTMLDivElement>[]>([]);
  if (elRefs.current.length !== items.length) {
    elRefs.current = new Array(items.length)
      .fill(undefined)
      .map((_, i) => elRefs.current[i] || createRef<HTMLDivElement>());
  }

  const setSize = (item: MutableRefObject<HTMLDivElement>) => {
    item.current.style.gridRowEnd = `span ${Math.round(
      Array.from(item.current.children).reduce(
        (sum, item) => sum + item.clientHeight,
        0
      ) / 10
    )}`;
  };

  useEffect(() => {
    const handleSize = () => {
      elRefs.current?.forEach(setSize);
    };
    if (document.readyState !== "loading") handleSize();
    else window.addEventListener("load", handleSize);
    window.addEventListener("resize", handleSize);
    window.addEventListener("orientationchange", handleSize);
    return () => {
      window.removeEventListener("load", handleSize);
      window.removeEventListener("resize", handleSize);
      window.removeEventListener("orientationchange", handleSize);
    };
  }, []);

  return (
    <StyledMasonry
      item
      container
      direction="column"
      {...props}
      columns={columns}
    >
      {items.map((item, index) => (
        <Grid key={index} ref={elRefs.current[index]} item>
          {renderItem(item, index, () => setSize(elRefs.current[index]))}
        </Grid>
      ))}
    </StyledMasonry>
  );
};

export default Masonry;
