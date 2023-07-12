import { useRouter } from "next/router";

import Page from "components/Page";
import styles from "../../styles/Home.module.css";

function DomainPage() {
  const router = useRouter();
  const { pathname } = router;

  const id = Math.floor(Math.random() * 100);

  return (
    <Page title="Domain">
      <div className={styles.container}>
        <h2>Domain</h2>
        <div className={styles.buttons}>
          <button onClick={() => router.push(`${pathname}/new`)}>
            new domain
          </button>
          <button
            onClick={() =>
              router.push(`${pathname}/[type]/[id]`, `${pathname}/edit/${id}`)
            }
          >
            edit domain
          </button>
        </div>
      </div>
    </Page>
  );
}

export default DomainPage;
