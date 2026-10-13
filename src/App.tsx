import { BoardLayout } from './components/BoardLayout';
import { TrackerContainer } from './components/TrackerContainer';

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Task Management Dashboard</h1>
      <BoardLayout />
      <TrackerContainer />
    </div>
  );
}