import { useSelector } from "react-redux";

export const useIsLoading = () => {
  const categoryLoading = useSelector((state) => state.category.isLoading);
  const eventLoading = useSelector((state) => state.event.isLoading);
  const userLoading = useSelector((store) => store.user.isLoading);
  const authLoading = useSelector((state)=> state.auth.isLoading);
  const bookingLoading = useSelector((state) => state.booking.isLoading);


  return categoryLoading || eventLoading || userLoading || authLoading || bookingLoading;
};
