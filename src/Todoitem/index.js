import './TodoItem.css'
import './Botone.css'
import { CompleteIcon } from '../CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { ReactComponent as NomegustaSVG } from "../TodoIcon/Nomegusta.svg"
import { ReactComponent as MegustaSVG } from "../TodoIcon/Megusta.svg"
function TodoItem({ text, completed, onComplete, onDelete, likes, nolikes, like }) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={completed}
                onComplete={onComplete} />
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
                {text}
            </p>
            <div>
                <span className="container">
                    {likes}
                </span>
                <div className='containe'>
                    <span onClick={like}> <MegustaSVG/> </span>
                    <span onClick={nolikes}> <NomegustaSVG/> </span>
                </div>
            </div>
            <DeleteIcon
                onDelete={onDelete} />
        </li>
    );
}
export { TodoItem };