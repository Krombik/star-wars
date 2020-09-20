import React, { FC, memo, useCallback } from "react";
import { FetchRV, State, ThunkDispatcher } from "types";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import Modal from "components/common/Modal";
import { setModal } from "redux/modal/actions";
import useSWR from "swr";
import fetcher from "utils/fetcher";
import { customsearch_v1 } from "googleapis";
import getGoogleSearchUrl from "api/google";
import { ImageType } from "redux/images/type";
import ImagesContainer from "./ImagesContainer";

const selectData = createSelector(
  (state: State) => state.modal.open,
  (state: State) => state.modal.name,
  (open, name) => ({ open, name })
);

const ImgModal: FC = memo(() => {
  const { open, name } = useSelector(selectData);

  const dispatch = useDispatch<ThunkDispatcher>();

  const handleClose = useCallback(() => {
    dispatch(setModal(false));
  }, []);

  const { data } = useSWR<FetchRV<customsearch_v1.Schema$Search>>(
    name ? getGoogleSearchUrl(name) : null,
    fetcher.get
  );

  const images = data?.res?.items?.reduce<ImageType[]>(
    (acc, img) => (img.link ? [...acc, [img.title || name, img.link]] : acc),
    []
  );

  return (
    <Modal open={open} onClose={handleClose}>
      {images ? <ImagesContainer images={images} /> : <div />}
    </Modal>
  );
});

export default ImgModal;
