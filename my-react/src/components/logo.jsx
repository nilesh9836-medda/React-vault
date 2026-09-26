function Logo({letter, color, family}) {
    return (
        <div style={{color: color, fontSize: '32px', fontFamily: family, fontWeight: 'bold'}}>
            {letter}
        </div>
    )
}

export default Logo
