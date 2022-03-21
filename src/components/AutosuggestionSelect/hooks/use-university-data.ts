import { config } from '../../../config';
import { Error, University } from '../types';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useMemo, useState } from 'react';

const searchParams = 'search?name=';

export const useUniversityData = (searchText: string) => {
  const [universitiesData, setUniversitiesData] = useState<University[]>([]);
  const [error, setError] = useState<Error | null>();

  const getUniversities = useCallback(
    async (name) => {
      try {
        const result = await fetch(`${config.PUBLIC_URL}/${searchParams}${name}`);
        const data = await result.json();
        setUniversitiesData(data);
        setError(null);
      } catch (error) {
        setError(error as Error);
      }
    },
    [setUniversitiesData, setError],
  );

  const getUniversitiesDebounce = useMemo(() => debounce(getUniversities, 300), [getUniversities]);

  const clearResults = useCallback(() => {
    setUniversitiesData([]);
  }, [setUniversitiesData]);

  useEffect(() => {
    if (searchText) {
      getUniversitiesDebounce(searchText);
    } else {
      clearResults();
    }
  }, [searchText, clearResults, getUniversitiesDebounce]);

  return { universitiesData, clearResults, error };
};
