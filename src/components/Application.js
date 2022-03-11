import ApplicationImages from './ApplicationImages';
import { PlayCircleFilled, GithubFilled } from '@ant-design/icons'

const styles = {
    format: {
      display: 'inline-block',
      justifyContent: 'space-between',
      margin: 'auto',
      border: 'solid',
      width: '200px',
      height: 'auto',
    },
    title: {
      justifyContent: 'space-around'
    },
    div: {
        justifyContent: 'space-evenly',
        textAlign: 'center',
        
    }
}

export default function Application ({ application }) {
    const { id, applicationTitle, applicationImage, applicationLink, github } = application
    return (
        <div style={styles.format}>
            <h2 style={styles.title}>{applicationTitle}</h2>
            { applicationImage.length ? <ApplicationImages images={applicationImage}/> : <p>Currently No Photos</p>}
            <ul className='nav' style={styles.div}>
                <li><a href={applicationLink}><PlayCircleFilled/></a></li>
                <li><a href={github}><GithubFilled/></a></li>
            </ul>
        </div>
    )
}