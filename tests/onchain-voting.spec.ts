import * as anchor from "@coral-xyz/anchor"
import { Program } from "@coral-xyz/anchor"
import { OnchainVoting } from "../target/types/onchain_voting"
import { describe, expect, it } from "vitest"

describe("onchain-voting", () => {
  anchor.setProvider(anchor.AnchorProvider.env())
  const program = anchor.workspace.OnchainVoting as Program<OnchainVoting>
  const voteBank = anchor.web3.Keypair.generate()

  it("Creating vote bank for public to vote", async () => {
    await program.methods
      .init()
      .accounts({
        voteAccount: voteBank.publicKey,
      })
      .signers([voteBank])
      .rpc()

    const voteBankAccount = await program.account.voteBank.getAccountInfo(voteBank.publicKey)

    expect(voteBankAccount).toBeDefined()
  })

  it("Vote for GM", async () => {
    await program.methods.vote({ gm: {} }).accounts({ voteAccount: voteBank.publicKey }).rpc()

    const voteBankData = await program.account.voteBank.fetch(voteBank.publicKey)

    expect(voteBankData.isOpenToVote).toBeTruthy()
    expect(voteBankData.gm.toNumber()).toBe(1)
    expect(voteBankData.gn.toNumber()).toBe(0)
  })

  it("Vote for GN", async () => {
    await program.methods
      .vote({ gn: {} })
      .accounts({
        voteAccount: voteBank.publicKey,
      })
      .rpc()

    const voteBankData = await program.account.voteBank.fetch(voteBank.publicKey)

    expect(voteBankData.isOpenToVote).toBeTruthy()
    expect(voteBankData.gm.toNumber()).toBe(1)
    expect(voteBankData.gn.toNumber()).toBe(1)
  })
})
