import Application from './Application';

const styles = {
    format: {
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
    },
    column: {
        float: 'left',
        width: '50%',
        padding: '10px',
        border: 'solid',
        borderRadius: '10px',
        margin: 'auto',
      },
      row: {
        display: 'table',
        clear: 'both',
      },
      medium: {
        justifyContent: 'center',
        width: '72%',
        margin: 'auto',
      }
}

export default function ApplicationList({ data }) {
    return (
        <div style={styles.medium}>
            <div style={styles.row}>
                {data.map(
                    (application, index) => {
                        return <div style={styles.column}>
                            <Application key={index} application={application}/>
                            </div>
                    }
                )}
            </div>
        </div>
    )
}