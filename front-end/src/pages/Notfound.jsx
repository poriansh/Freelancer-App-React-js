import { useNavigate } from "react-router-dom";

function Notfound() {
    const navigate = useNavigate()
  return (
    <div className="text-center mt-20">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-lg text-blue-600 mb-6">صفحه ای که دنبالش بودید پیدا نشد </p>
      <button className="border border-pramery-900 text-pramery-800 p-3 rounded-md" onClick={() => navigate(-1)}>برگشت</button>
    </div>
  );
}

export default Notfound;
