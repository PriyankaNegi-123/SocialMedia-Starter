
import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {

  const theme = useMantineTheme();

  return (
    
      <Modal
        overlaycolor= {theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayopacity= {0.55}
        overlayblur= {3}
        size='55%'
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
      >
        <form className='infoForm'>
            <h3>Your info</h3>
            <div>
                <input type='text' className='infoInput'
                name='FirstName'
                placeholder='First Name'/>
                <input type='text' className='infoInput'
                name='LastName'
                placeholder='Last Name'/>
            </div>
            <div>
                <input type='text' className='infoInput'
                name='worksAt'
                placeholder='Works at'/>
            </div>
            <div>
                <input type='text' className='infoInput'
                name='livesIn'
                placeholder='Lives in'/>
                <input type='text' className='infoInput'
                name='Country'
                placeholder='Country'/>
            </div>
            <div>
                <input type='text' className='infoInput'
                name='relStatus'
                placeholder='Relationship status'/>
            </div>
            <div>
                Profile Image
                <input type='file' name='profileImg'/>
                Cover Image
                <input type='file'
                name='coverImg'/>
            </div>
            <button className='button infoButton'>Update</button>
        </form>
      </Modal>

      
  );
}

export default ProfileModal