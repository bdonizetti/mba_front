import { useQuery } from "@tanstack/react-query";
import { DashboardCardInfo } from "./dashboard-card-info";
import { VisitorsChart } from "./visitors-chart";
import { GetNumberOfProductsSoldBySellerIn30Days } from "../../../api/get-number-of-products-sold-by-seller-in-30-days";
import { GetNumberOfProductsAvailableIn30Days } from "../../../api/get-number-of-products-available-in-30-days";
import { GetNumberOfViewsReceivedIn30Days } from "../../../api/get-number-of-views-received-in-30-days";

export function Dashboard() {
  const { data: numberOfProductsSold } = useQuery({
    queryKey: ['metrics', 'products-sold-in-30-days'],
    queryFn: GetNumberOfProductsSoldBySellerIn30Days
  })

  const { data: numberOfProductsAvailable } = useQuery({
    queryKey: ['metrics', 'products-available-in-30-days'],
    queryFn: GetNumberOfProductsAvailableIn30Days
  })

  const { data: numberOfViews } = useQuery({
    queryKey: ['metrics', 'views-in-30-days'],
    queryFn: GetNumberOfViewsReceivedIn30Days
  })

  return (
    <div className="flex flex-col gap-10 mt-16">
      <div className="flex flex-col gap-2">
        <h1 className="font-sans text-title-lg text-grayscale-500">Últimos 30 dias</h1>
        <p className="font-poppins text-body-sm text-grayscale-300">Confira as estatísticas da sua loja no último mês</p>
      </div>

      <div className="grid grid-cols-4 grid-rows-3 gap-4">
        <div>
          <DashboardCardInfo description="Produtos vendidos" value={String(numberOfProductsSold?.amount)} icon="Wallet" />
        </div>
        <div className="col-start-1 row-start-2">
          <DashboardCardInfo description="Produtos anunciados" value={String(numberOfProductsAvailable?.amount)} icon="Wallet" />
        </div>
        <div className="col-start-1 row-start-3">
          <DashboardCardInfo description="Pessoas visitantes" value={String(numberOfViews?.amount)} icon="Wallet" />
        </div>

        <div className=" col-span-3 row-span-3 col-start-2 row-start-1 bg-shape-white p-6 rounded-[20px]">
          <div className="flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <p className="text-title-sm font-sans text-grayscale-500">Visitantes</p>
              <span>data</span>
            </div>

            <VisitorsChart />
          </div>
        </div>
      </div>
    </div>
  )
}