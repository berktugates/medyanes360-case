import TopBoxItem from "./TopBoxItem";
export default function TopBox({ cost, no, date, status }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <TopBoxItem title={"Sipariş Tarihi"} value={date} />
        <TopBoxItem title={"Sipariş Tutarı"} value={`${cost}₺`} />
        <TopBoxItem title={"Sipariş Numarası"} value={no} />
        <TopBoxItem title={"Sipariş Durumu"} value={status} />
      </div>
    </>
  );
}
