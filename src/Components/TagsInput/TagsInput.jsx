import React, { useState } from 'react';
import { TextField, Chip, Autocomplete } from '@mui/material';

const TagsInput = ({ label, tags, setTags, suggestions }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = (event, value) => {
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
      setInputValue('');
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Autocomplete
      freeSolo
      options={suggestions}
      inputValue={inputValue}
      onInputChange={(e, newValue) => setInputValue(newValue)}
      onChange={handleAddTag}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder="Type and select mitigations"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleDeleteTag(tag)}
                    color="primary"
                  />
                ))}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default TagsInput;
