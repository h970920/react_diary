import React from 'react'; // React를 import 해주세요.
import Button from '../component/Button';
import Header from '../component/Header';

const Home = () => {
    return (
        <div>
            <Header
                title={'Home'}
                leftChild={
                    <Button
                        type="positive"
                        text={'긍정버튼'}
                        onClick={() => {
                            alert('긍정버튼 클릭!');
                        }}
                    />
                }
                rightChild={
                    <Button
                        type="negative"
                        text={'부정버튼'}
                        onClick={() => {
                            alert('부정버튼 클릭!');
                        }}
                    />
                }
            />
        </div>
    );
};

export default Home;
