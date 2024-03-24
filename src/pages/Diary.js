import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}번 일기</div>
      <h1>Diary</h1>
    </div>
  );
};

export default Diary;
