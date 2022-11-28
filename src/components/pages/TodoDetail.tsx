import {useParams} from 'react-router-dom';

export default function TodoDetail() {
	const {id} = useParams();
	return <div>Detail of {id}</div>;
}