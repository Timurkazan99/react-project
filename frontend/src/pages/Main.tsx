import { useAppSelector } from '../hooks/redux';

const Main = () => {
    const a = useAppSelector(state => console.log(typeof state));
    return (
        <>{a}</>
    );
};

export default Main;