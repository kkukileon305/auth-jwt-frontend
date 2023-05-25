import api from '@/utils/api';
import { Tag } from '@/types';
import TagItem from '@/components/server/items/TagItem';

const Aside = async () => {
  const { data: tags } = await api.get<Tag[]>('/tags');

  return (
    <aside>
      <ul className='flex flex-wrap gap-x-4 gap-y-2'>
        {tags.map((tag) => (
          <TagItem tag={tag} key={tag.id} />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
