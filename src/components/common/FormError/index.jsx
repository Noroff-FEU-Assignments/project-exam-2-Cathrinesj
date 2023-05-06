import PropTypes from 'prop-types';

export default function FormError({children}) {
    return <div className='formError'>{children}</div>
}

FormError.propTypes = {
    children: PropTypes.node.isRequired,
};