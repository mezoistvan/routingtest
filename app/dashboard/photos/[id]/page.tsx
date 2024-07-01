

import { Modal } from "../../@modal/(.)photos/[id]/modal";
import Page from "../../page";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <>
    <Page></Page>
    <Modal>{id}</Modal>
  </>
}
