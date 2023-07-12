import { ReactNode } from "react";

// next
import Head from "next/head";

// ==============================|| Page - SET TITLE & META TAGS ||============================== //

interface Props {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = ({ children, title, meta, ...other }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      {meta}
    </Head>

    <div {...other}>{children}</div>
  </>
);

export default Page;
