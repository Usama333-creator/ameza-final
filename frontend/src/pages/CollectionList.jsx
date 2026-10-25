import { Link } from 'react-router-dom';
import { useApi, useTitle } from '../lib/hooks.js';

// templates/list-collections.json
export default function CollectionList() {
  useTitle('Collections');
  const { data } = useApi('/collections');
  return (
    <section className="am-sec"><div className="am-wrap">
      <div className="am-head" data-reveal><div><p className="am-eb">Explore</p><h1 className="am-h">All collections</h1></div></div>
      <div className="am-tiles">
        {(data?.collections || []).filter(c => c.handle !== 'all').map((c, i) => (
          <Link key={c.handle} className="am-tile" to={`/collections/${c.handle}`} data-reveal style={{ '--i': i, '--tb': '#1d3f8a' }}>
            {c.image && <img src={c.image} alt={c.title} loading="lazy" />}<h3>{c.title}</h3><span>{c.productsCount} products</span>
          </Link>
        ))}
      </div>
    </div></section>
  );
}
