import Grid from '@material-ui/core/Grid';
import Admin from './component/admin/component'
import User from './component/user/component'
import '../src/assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <User />
        </Grid>
        <Grid item xs={8}>
          <Admin />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
