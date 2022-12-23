import { useState, useCallback } from 'react';

export function useErrors() {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }

    setErrors((prevState) => [...prevState, {
      field,
      message,
    }]);
  }, [errors]);

  const removeError = useCallback((field) => {
    setErrors((prevState) => prevState.filter((error) => error.field !== field));
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldName) => (
      errors.find((error) => error.field === fieldName)?.message),
    [errors],
  );

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
