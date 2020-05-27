// import Input from '../Components/Teams/Input'
// import {deletePlayer} from '../Components/Teams/Teams'

// test('', () => {
//     expect ()
// })

// test('deletePlayer deletes a player', () => {
// });

// test('submits username and password', () => {
//     const username = 'E';
//     const password = 'P';
//     const onSubmit = jest.fn();
//     const { getByLabelText, getByRole } = render(
//       <Login onSubmit={onSubmit} />
//     );
  
//     fireEvent.change(getByLabelText(/username/i), {
//       target: { value: username }
//     });
  
//     fireEvent.change(getByLabelText(/password/i), {
//       target: { value: password }
//     });
  
//     fireEvent.click(getByRole('button', { name: /log in/i }));
  
//     expect(onSubmit).toHaveBeenCalledTimes(1);
//     expect(onSubmit).toHaveBeenCalledWith({
//       username,
//       password
//     });
//   });