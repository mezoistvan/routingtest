// not sure if this is needed

export default function DashboardLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
