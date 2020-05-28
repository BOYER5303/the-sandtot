
import axios from 'axios'
//import renderer from 'react-test-renderer';

  describe('Endpoint tests', () => {
      it('get players', () => {
          axios.get('http://localhost:4006/api/players').then((res) => {
              expect(res).objectContaining(player_id)
          })
      }),
      it('delete player', () => {
          axios.delete('http://localhost:4006/api/players/5').then((res) => {
              expect(res).toHaveBeenCalled()
          })
      }),
      it('get homeruns', () => {
          axios.get('http://localhost:4006/stats/hr/').then((res) => {
              expect(res).assertions(number)
          })
      }),
      it('update postion', () => {
          axios.put('http://localhost:4006/api/players/5').then((res) => {
              expect(res).toBeNaN
          })
      }),
      it('get homeruns', () => {
        axios.get('http://localhost:4006/stats/hits/').then((res) => {
            expect(res).assertions(number)
        })
    })
  })
