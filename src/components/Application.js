import ApplicationImages from './ApplicationImages';
import { PlayCircleFilled, GithubFilled } from '@ant-design/icons'

const styles = {
    format: {
    //   display: 'inline-block',
      justifyContent: 'space-between',
      margin: 'auto',
      width: '200px',
      height: 'auto',
    },
    title: {
      textAlign: 'center',
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
            { applicationImage.length ? <ApplicationImages index={id} title={applicationTitle} images={applicationImage}/> : <p>Currently No Photos</p>}
            <ul className='nav' style={styles.div}>
                <li><a href={applicationLink}><PlayCircleFilled/></a></li>
                <li><a href={github}><GithubFilled/></a></li>
            </ul>
        </div>
    )
}