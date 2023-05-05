import PropTypes from 'prop-types';

function Filter({ handlerChangeFilter, value }) {
    return (
        <>
            <label htmlFor="filter">Find contacts by name:</label>
            <input
                id="filter"
                type="text"
                name="filter"
                onChange={handlerChangeFilter}
                value={value}
            />
        </>
    );
}

Filter.propTypes = {
    handlerChangeFilter: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Filter;