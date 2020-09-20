import React, { FC, useEffect, useRef } from "react";
import { ThunkDispatcher } from "types";
import { useDispatch } from "react-redux";
import { ImageType } from "redux/images/type";
import "styled-components/macro";
import { addImage, removeImage } from "redux/images/actions";
import { Button, Typography } from "@material-ui/core";
import { setAlert } from "redux/alert/actions";
import {
  ButtonWrapper,
  HeaderWrapper,
  StyledImageContainer,
} from "components/images/styled";

type Props = {
  item: ImageType;
  updateSize: () => void;
  index: number;
};

const ImageContainer: FC<Props> = ({ item, index, updateSize }) => {
  const saved = index >= 0;
  const ref = useRef<HTMLImageElement>(null);
  const dispatch = useDispatch<ThunkDispatcher>();

  const handleAdd = () => {
    dispatch(addImage(item));
    dispatch(setAlert(true, "success", "Image saved"));
  };
  const handleRemove = () => {
    dispatch(removeImage(index));
  };

  useEffect(() => {
    const img = ref.current;
    img?.addEventListener("load", updateSize);
    return () => {
      img?.removeEventListener("load", updateSize);
    };
  }, []);

  return (
    <StyledImageContainer container justify="center">
      <HeaderWrapper item>
        <Typography variant="h4"> {item[0]}</Typography>
      </HeaderWrapper>
      <img ref={ref} src={item[1]} alt={item[0]} />
      <ButtonWrapper item>
        <Button
          color="primary"
          variant="contained"
          onClick={saved ? handleRemove : handleAdd}
        >{`${saved ? "Delete" : "Save"} image`}</Button>
      </ButtonWrapper>
    </StyledImageContainer>
  );
};

export default ImageContainer;
