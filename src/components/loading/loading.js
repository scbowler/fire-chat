import React from 'react';
import Dot from './dot';
import './loading.css';

const ids = ['d01', 'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'd11', 'd12'];

export default props => {
    const dots = ids.map(id => <Dot key={id} id={id} />);
    const { full, container, custom } = props;
    let styles = {
        position: 'absolute',
        top: 0,
        left: 0,
    };

    if (full) {
        styles.height = '100vh';
        styles.width = '100vw';
    } else if (container) {
        styles.height = '100%';
        styles.width = '100%';
    } else if (custom) {
        styles = custom;
    }

    return (
        <div style={styles} className="spinner-container">
            <div className="spinner">{dots}</div>
        </div>
    )
}
