
function HeaderComponent(props: { pricesImage: string; titlePricesHeader: string }) {
  return (
    <div className={`pricesHeader ${props.pricesImage}`}>
      <div className="pricesHeaderTitle">
        <h1>{props.titlePricesHeader}</h1>
      </div>
    </div>
  );
}
export default HeaderComponent;