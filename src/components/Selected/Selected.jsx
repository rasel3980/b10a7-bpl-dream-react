/* eslint-disable react/prop-types */

const Selected = ({ choosePlayer }) => {
    const { name, age } = choosePlayer || {}; // Destructure safely with fallback
    return (
        <div>
            {/* <h1>name:{name}</h1> */}
        </div>
    );
};

export default Selected;
