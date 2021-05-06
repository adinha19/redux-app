import SongList from './components/songList';
import SongDetail from './components/songDetail';

const App = () => {
    return (
        <div>
            <div className='left'>
                <SongList />
            </div>
            <div className='right panel'>
                <SongDetail />
            </div>
        </div>
    );
}

export default App;