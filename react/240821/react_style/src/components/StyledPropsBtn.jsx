import styled from 'styled-components';


const StyledProps = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor:pointer;
    transition:all 0.3s;
    background-color: ${props => {
        switch (props.color) {
            case 'danger':
                return 'red';
            case 'success':
                return 'green';
            case 'fail':
                return 'grey';
            default:
                return 'black';
        }
    }};

    &:hover{
        transform: ${props => props.size === 'large' ? 'scale(1.5)' : 'scale(1.1)'}
    };

    width: ${props => props.$fullwidth ? '100%' : 'auto'};

`;


const StyledPropsBtn = () => {
    return (
        <>
            <StyledProps size="large" $fullwidth={false}>버튼입니다.</StyledProps>
            <StyledProps color='success'>버튼입니다.</StyledProps>
            <StyledProps size="large" color='fail' $fullwidth>버튼입니다.</StyledProps>
        </>
    );
}

export default StyledPropsBtn;