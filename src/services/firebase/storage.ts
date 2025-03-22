import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase';

export const uploadProfileImage = async (userId: string, file: File) => {
  const storageRef = ref(storage, `users/${userId}/profile-${Date.now()}.jpg`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};