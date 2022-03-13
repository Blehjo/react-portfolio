import Application from './Application';

const styles = {
    format: {
      display: 'inline-block',
      justifyContent: 'space-evenly',
      fontSize: '30px',
      padding: '1rem',
      border: 'solid',
      borderRadius: '1rem',
    },
    title: {
      marginLeft: '200px'
    },
    div: {
        // margin: '100px',
        justifyContent: 'space-evenly',
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