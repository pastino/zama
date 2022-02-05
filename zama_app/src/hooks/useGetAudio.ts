import useContentAPI from '@/api/content/useContentAPI';
import {useEffect, useState} from 'react';

export default function useGetAudio({division, take}) {
  const [audios, setAudios] = useState<any>([
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
  ]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const isLastPage = totalPage && page > totalPage;

  const {getAudios} = useContentAPI();

  const handleGetAudios = async () => {
    const {
      audios: [data, totalCount],
    } = await getAudios({
      division,
      page: 1,
      take,
    });
    setAudios(data);
    setPage(2);
    setTotalPage(Math.ceil(totalCount / take));
  };

  const handleGetMore = async () => {
    if (page === 1) return;

    const {
      audios: [data],
    } = await getAudios({
      division,
      page,
      take,
    });

    const addedAudios: any = [...audios, ...data];
    setAudios(addedAudios);
    setPage(page + 1);
  };

  useEffect(() => {
    handleGetAudios();
  }, []);

  return [audios, isLastPage, handleGetMore, totalPage];
}
