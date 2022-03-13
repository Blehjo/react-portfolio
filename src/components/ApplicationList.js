import Application from './Application';

const styles = {
    format: {
    //   display: 'inline-block',
      justifyContent: 'space-evenly',
      fontSize: '30px',
      padding: '1rem',
      border: 'solid',
      borderRadius: '1rem',
    },
    div: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '50px',
        margin: 'auto 200px auto 200px'
    }
}

export default function ApplicationList({ data }) {
    return (
        <div style={styles.div}>
            {data.map(
                (application, index) => {
                    return <div style={styles.format}>
                        <Application key={index} application={application}/>
                        </div>
                }
            )}
        </div>
    )
}