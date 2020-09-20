import React, { FC, memo } from "react";
import { FetchRV, TabDataType, TabQuery } from "types";
import { useParams } from "react-router-dom";
import { useSWRInfinite } from "swr";
import fetcher from "utils/fetcher";
import TabContentItems from "containers/tabContent/TabContentItems";
import Gutter from "components/common/Gutter";
import Spinner from "components/common/Spinner";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const TabContent: FC = memo(() => {
  const { tab } = useParams<TabQuery>();

  const { data, size, setSize } = useSWRInfinite<FetchRV<TabDataType>>(
    (_, prevData) =>
      prevData
        ? !prevData.status
          ? prevData.res!.next
          : null
        : `http://swapi.dev/api/${tab}`,
    fetcher.get
  );

  if (!data || !size || !setSize) return <Spinner />;

  const isLoading = data.length !== size;
  const isLoadMoreUnavailable = !data[data.length - 1].res?.next;

  return (
    <Gutter>
      <TabContentItems data={data} />
      {isLoading && <Spinner />}
      <Grid container item justify="center">
        <Button
          onClick={() => setSize((x) => x + 1)}
          variant="contained"
          color="primary"
          disabled={isLoading || isLoadMoreUnavailable}
        >
          {isLoading
            ? "Loading..."
            : isLoadMoreUnavailable
            ? "No more data"
            : "Load more"}
        </Button>
      </Grid>
    </Gutter>
  );
});

export default TabContent;
