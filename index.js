function Button(props) {
  //   Write your code here.
  const { style, content } = props;
  return <button className={style}>{content}</button>;
}

const element = (
  //   Write your code here.
  <div className="bg-container">
    <div className="inner-container">
      <h1 className="btn-heading">Social Buttons</h1>
      <div className="btn-container">
        <Button style="btn-1" content="Like" />
        <Button style="btn-2" content="Comment" />
        <Button style="btn-3" content="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
