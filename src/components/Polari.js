import { polariData } from './images/polariData';
import { PlayCircleFilled, GithubFilled } from '@ant-design/icons'

const data = polariData
const images = polariData.applicationImage

const styles = {
    pictures: {
        overflowY: 'auto',
        height: '555px',
    },
    links: {
        justifyContent: 'space-evenly',
        textAlign: 'center',
        padding: '10px'
    },
    image: {
        borderRadius: '10px',
    },
    icons: {
        fontSize: '50px',
        height: 'auto'
    }
}

export default function Polari() {
    const { id, applicationTitle, applicationImage, applicationLink, github } = data
    console.log(id)
    console.log(applicationImage)
    return (
        <>
            <h2>Polari</h2>
            <div>
                <div style={styles.pictures}>
                    {images.map((image) => {
                        return <img style={styles.image} key={id} alt={applicationTitle} src={require(`/Users/blehjo/bootcamp/homework/react-portfolio/src/assets/${image}.png`)} width='92%' height='auto'/>
                    })}
                </div>
            <ul className='nav' style={styles.links}>
                <li><a href={applicationLink} target='_blank' rel="noreferrer" style={styles.icons}><PlayCircleFilled/></a></li>
                <li><a href={github} target='_blank' rel="noreferrer" style={styles.icons}><GithubFilled/></a></li>
            </ul>
            </div>
        </>
    )
}