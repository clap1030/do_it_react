import TodaysPlan from './03/TodaysPlan';
import MyComponent from './03/MyComponent';
import PropsComponent from './03/PropsComponent';

function App() {
  return (
    //HTML이 아니라 JSX양식
    <div className="body">
       <PropsComponent name="문자열형 프로퍼티"
          booleanValue = { true }
          numberValue = {1004}
          arrayValue = {[1,2,3]}
          objValue = { {title2: "타이틀", year: 2021} }
          nodeValue = { <h1>nodevalue</h1>}
          funcValue = { () => console.log("funcValue")}
          booleanBlankValue
       >
         <div><span>자식노드도 하위컴포넌트에서 받을수있대!</span></div>
       </PropsComponent>
    </div>
  );
}

export default App;
