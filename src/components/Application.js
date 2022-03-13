import ApplicationImages from './ApplicationImages';
import { PlayCircleFilled, GithubFilled } from '@ant-design/icons'

const styles = {
    format: {
      justifyContent: 'space-between',
      margin: 'auto',
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
    },
    div: {
      justifyContent: 'space-evenly',
      textAlign: 'center',
    },
    pictures: {
      overflowY: 'auto',
      height: '188px',
    }
}

export default function Application ({ application }) {
    const { id, applicationTitle, applicationImage, applicationLink, github } = application
    return (
        <div style={styles.format}>
            <h2 style={styles.title}>{applicationTitle}</h2>
            { applicationImage.length ? <div style={styles.pictures}><ApplicationImages index={id} title={applicationTitle} images={applicationImage}/></div> : <p>Currently No Photos</p>}
            <ul className='nav' style={styles.div}>
                <li><a href={applicationLink}><PlayCircleFilled/></a></li>
                <li><a href={github}><GithubFilled/></a></li>
            </ul>
        </div>
    )
}