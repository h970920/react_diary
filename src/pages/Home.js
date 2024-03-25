import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button
        type={"default"}
        text={"기본 버튼"}
        onClick={() => {
          alert("default button clicked");
        }}
      />

      <Button
        type={"positive"}
        text={"긍정 버튼"}
        onClick={() => {
          alert("positive button clicked");
        }}
      />

      <Button
        type={"negative"}
        text={"부정 버튼"}
        onClick={() => {
          alert("nagative button clicked");
        }}
      />
    </div>
  );
};

export default Home;
