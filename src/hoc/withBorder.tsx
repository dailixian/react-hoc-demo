//HOC is a function that takes a component as argument
// const withBorder = (OldComp: any) => {
//   return () => (
//     <>
//       <h3>This is a new component</h3>
//       <div className="border border-primary p-2 " style={{ padding: "15px"}}>
//         <OldComp></OldComp>
//       </div>
//     </>
//   );
// };

const withBorder = (borderType: string) => {
  //do logic
  return (OldComp: any) => () =>
    (
      <>
        <div
          className={`border border-${borderType} p-2 `}
          style={{ padding: "15px" }}
        >
          <OldComp></OldComp>
        </div>
      </>
    );
};

export default withBorder;
