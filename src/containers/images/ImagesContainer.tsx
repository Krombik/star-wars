import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";
import { State } from "types";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { ImageType } from "redux/images/type";
import Masonry from "../common/Masonry";
import ImageContainer from "./ImageContainer";
import Gutter from "components/common/Gutter";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FilterIcon from "@material-ui/icons/Filter";

const selectData = createSelector(
  (state: State) => state.images.savedImages,
  (savedImages) => ({ savedImages })
);

type Props = { images?: ImageType[] };

const ImagesContainer: FC<Props> = (props) => {
  const { savedImages } = useSelector(selectData);
  const images = props.images || savedImages;

  const [filteredImages, setFilteredImages] = useState(images);
  const [filter, setFilter] = useState("");

  const handleFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setFilter(value);
      setFilteredImages((prevState) => {
        const filteredImages = images.filter((item) =>
          item[0].toLowerCase().includes(value)
        );
        if (
          filteredImages.length === prevState.length &&
          filteredImages.every((item, index) => item === prevState[index])
        )
          return prevState;
        return filteredImages;
      });
    },
    [images]
  );

  useEffect(() => {
    if (savedImages === images)
      setFilteredImages((prevState) =>
        prevState.filter((item) => savedImages.includes(item))
      );
  }, [savedImages, images]);

  return (
    <Gutter>
      <Grid item container>
        <TextField
          fullWidth
          placeholder="Filter"
          onChange={handleFilter}
          value={filter}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FilterIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Grid>
      <Masonry
        columns={2}
        spacing={1}
        items={filteredImages}
        renderItem={(item, index, updateSize) => (
          <ImageContainer
            item={item}
            index={
              item === savedImages[index]
                ? index
                : savedImages.findIndex((image) => item[1] === image[1])
            }
            updateSize={updateSize}
          />
        )}
      />
    </Gutter>
  );
};

export default ImagesContainer;
