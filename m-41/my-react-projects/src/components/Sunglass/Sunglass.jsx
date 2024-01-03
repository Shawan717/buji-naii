// import add from '../../Utils/calculate';
import { add ,multiply,divideTheFirstNumberByTheSecondNumber as divied} from '../../Utils/calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';

const Sunglass = () => {
    const first=55;
    const second=60;
    const sum =add(first,second);
    const mult=multiply(first,second)
    const vaag=divied(first,second)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;