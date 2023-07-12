import { useRouter } from "next/router";

import { useQuery } from "@tanstack/react-query";
import Loader from "components/Loader";
import NoData from "components/NoData";
import Page from "components/Page";
import { getDomain } from "pages/api/domain";

function EditDomain() {
  const {
    query: { id, type },
  } = useRouter();

  const { data, isLoading } = useQuery([`domain ${id}`], () =>
    getDomain(id as string)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NoData />;
  }

  return <Page title="Domain type">{`${type} domain ${id}`}</Page>;
}

export default EditDomain;
