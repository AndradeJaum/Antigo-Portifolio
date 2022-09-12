import "./style.css"
import { Icon } from '@iconify/react';

function Arrow() {
    return (
        <>
            <div className="box-arrow">
                <p className="scroll">scroll</p>
                <Icon className="vetor" icon="ep:d-arrow-right" width={20} height={20} />
            </div>
        </>
    )
}

export default Arrow;