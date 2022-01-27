import useAPI from "./useAPI";

export default function useVoucherAPI() {
  const { getHandler, postHandler, putHandler } = useAPI();

  const getVouchers = async ({ page, size }) => {
    try {
      const { data } = await getHandler("/admin/voucher", {
        page,
        size,
      });

      return data;
    } catch (error) {
      throw error;
    }
  };

  const createVoucher = async (type) => {
    try {
      const { data } = await postHandler("/voucher", {
        type,
      });

      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getVouchers,
    createVoucher,
  };
}
