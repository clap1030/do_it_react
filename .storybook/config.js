import { configure, setAddon } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault'
import JSXAddon from 'storybook-addon-jsx';

function loadStories(){
    //InputStory.jsx 파일을 require함수로 임포트. ==> Input스토리를  스토리북에 연결.
    //require('../src/stories/InputStory');
    //require('../src/stories/NewCounterStory');

    //src/stories 폴더아래 *Story.jsx 파일목록을 가져온다.
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    console.log("context", context);

    context.keys().forEach((srcFile) => {
        //console.log("srcFile",srcFile);
        //context()함수는 require()함수와 동일한 기능. 가변경로를 사용할때 사용.
        //console.log(context(srcFile));
        interopRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);